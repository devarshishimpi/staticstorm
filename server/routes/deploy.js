const express = require("express");
const router = express.Router();
const UserSchema = require("../models/User");
const ProjectSchema = require("../models/Project");
const PortSchema = require("../models/Port");
// const { body, validationResult } = require('express-validator');
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
// const fetchuser = require('../middleware/fetchuser');
const axios = require("axios");
const qs = require("querystring");
const { spawn } = require("child_process");
const { promises: fs } = require("fs");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/", async (req, res) => {
  const {
    frameworkPreset,
    rootDirectory,
    subDomain,
    packageManager,
    githubRepoId,
  } = req.body;

  axios
    .get("https://api.github.com/user", {
      headers: {
        Authorization: `Token ${req.body.accessToken}`,
      },
    })
    .then(async (response) => {
      // res.json(response.data);
      const theUser = await UserSchema.findOne({ githubId: response.data.id });
      if (!theUser) {
        return res
          .status(400)
          .json({ success: false, error: "User don't exist" });
      } else {
        const alreadyExist = await ProjectSchema.findOne({ name: subDomain });
        if (alreadyExist)
          return res.status(401).json({ error: "Domain Unavailable" });
        const portArray = await PortSchema.find();
        const port = portArray[0].nextFreePort;

        const project = await ProjectSchema.create({
          name: subDomain,
          packageManager,
          framework: frameworkPreset,
          rootDirectory,
          ownerId: theUser.githubId,
          githubRepoId,
          port,
        });
        return res.status(200).json({ success: true, projectId: project._id });
      }
    })
    .catch((error) => {
      console.error(error);
      res.json({ success: false });
    });
});

// router.post('/clone', async (req, res) => {
//     const theProject = await ProjectSchema.findById(req.body.projectId);
//     axios.get(
//       `https://api.github.com/repositories/${theProject.githubRepoId}`,
//       {
//           headers: {
//               'Authorization': `Token ${req.body.accessToken}`
//           }
//       }
//   ).then(async response => {
//     // console.log(response.data);
//     process.chdir('/Users/devarshishimpi/Downloads/');

//     const gitClone = spawn('git', ['clone', `https://${req.body.accessToken}@github.com/${response.data.full_name}.git`]);

//     let logs = '';

//     gitClone.stdout.on('data', data => {
//       logs += data.toString();
//     });

//     gitClone.stderr.on('data', data => {
//       logs += data.toString();
//     });

//     gitClone.on('close', code => {
//       if (code === 0) {
//         return res.status(200).json({
//           logs,
//           message: 'Repository cloned successfully'
//         });
//       } else {
//         return res.status(500).json({
//           logs,
//           message: 'Failed to clone repository'
//         });
//       }
//     });
//   })
//   .catch(error => {
//       console.error(error);
//       res.json({ success: false });
//   });
// });

router.post("/clone", async (req, res) => {
  if (req.body.projectId) {
    const theProject = await ProjectSchema.findById(req.body.projectId);
    axios
      .get(`https://api.github.com/repositories/${theProject.githubRepoId}`, {
        headers: {
          Authorization: `Token ${req.body.accessToken}`,
        },
      })
      .then(async (response) => {
        // console.log(response.data);
        const folderName = theProject.name; // name of the new folder
        const path = "/projects"; // path to the parent directory of the new folder
        const folderPath = `${path}/${folderName}`; // full path to the new folder
        const mkdir = spawn("mkdir", [folderPath]); // create the new folder

        mkdir.on("close", () => {
          process.chdir(folderPath); // change the current working directory to the new folder
          const gitClone = spawn("git", [
            "clone",
            `https://${req.body.accessToken}@github.com/${response.data.full_name}.git`,
          ]);

          let logs = "";

          gitClone.stdout.on("data", (data) => {
            logs += data.toString();
          });

          gitClone.stderr.on("data", (data) => {
            logs += data.toString();
          });

          gitClone.on("close", (code) => {
            if (code === 0) {
              return res.status(200).json({
                logs,
                message: "Repository cloned successfully",
              });
            } else {
              return res.status(500).json({
                logs,
                message: "Failed to clone repository",
              });
            }
          });
        });
      })
      .catch((error) => {
        console.error(error);
        res.json({ success: false });
      });
  } else {
    res.send("Internal server error!");
  }
});

router.post("/install", async (req, res) => {
  const theProject = await ProjectSchema.findById(req.body.projectId);
  axios
    .get(`https://api.github.com/repositories/${theProject.githubRepoId}`, {
      headers: {
        Authorization: `Token ${req.body.accessToken}`,
      },
    })
    .then(async (response) => {
      // console.log(response.data);
      process.chdir(`/projects/${theProject.name}/${response.data.name}`);

      const install = spawn("npm", [
        "install",
        "--legacy-peer-deps",
        "-C",
        theProject.rootDirectory,
      ]);

      let logs = "";

      install.stdout.on("data", (data) => {
        logs += data.toString();
      });

      install.stderr.on("data", (data) => {
        logs += data.toString();
      });

      install.on("close", (code) => {
        if (code === 0) {
          return res.status(200).json({
            logs,
            message: "Dependencies installed successfully",
          });
        } else {
          return res.status(500).json({
            logs,
            message: "Failed to install dependencies",
          });
        }
      });
    })
    .catch((error) => {
      console.error(error);
      res.json({ success: false });
    });
});

router.post("/build", async (req, res) => {
  const theProject = await ProjectSchema.findById(req.body.projectId);
  axios
    .get(`https://api.github.com/repositories/${theProject.githubRepoId}`, {
      headers: {
        Authorization: `Token ${req.body.accessToken}`,
      },
    })
    .then(async (response) => {
      // console.log(response.data);
      process.chdir(`/projects/${theProject.name}/${response.data.name}`);

      const build = spawn("npm", [
        "run",
        "build",
        "-C",
        theProject.rootDirectory,
      ]);

      let logs = "";

      build.stdout.on("data", (data) => {
        logs += data.toString();
      });

      build.stderr.on("data", (data) => {
        logs += data.toString();
      });

      build.on("close", (code) => {
        if (code === 0) {
          return res.status(200).json({
            logs,
            message: "Build successful",
          });
        } else {
          return res.status(500).json({
            logs,
            message: "Build Failed",
          });
        }
      });
    })
    .catch((error) => {
      console.error(error);
      res.json({ success: false });
    });
});

router.post("/copybuild", async (req, res) => {
  const theProject = await ProjectSchema.findById(req.body.projectId);
  axios
    .get(`https://api.github.com/repositories/${theProject.githubRepoId}`, {
      headers: {
        Authorization: `Token ${req.body.accessToken}`,
      },
    })
    .then(async (response) => {
      // console.log(response.data);
      const folderName = theProject.name; // name of the new folder
      const path = "/var/www/html"; // path to the parent directory of the new folder
      const folderPath = `${path}/${folderName}`; // full path to the new folder
      const mkdir = spawn("mkdir", [folderPath]); // create the new folder

      mkdir.on("close", () => {
        process.chdir(`/projects/${theProject.name}/${response.data.name}`); // change the current working directory to the new folder
        process.chdir(theProject.rootDirectory); // change the current working directory to the new folder
        const copyBuild = spawn("cp", ["-rf", "build", folderPath]);

        let logs = "";

        copyBuild.stdout.on("data", (data) => {
          logs += data.toString();
        });

        copyBuild.stderr.on("data", (data) => {
          logs += data.toString();
        });

        copyBuild.on("close", (code) => {
          if (code === 0) {
            return res.status(200).json({
              logs,
              message: "Copied Successfully",
            });
          } else {
            return res.status(500).json({
              logs,
              message: "Failed to copy",
            });
          }
        });
      });
    })
    .catch((error) => {
      console.error(error);
      res.json({ success: false });
    });
});

router.post("/nginxconf", async (req, res) => {
  const theProject = await ProjectSchema.findById(req.body.projectId);
  axios
    .get(`https://api.github.com/repositories/${theProject.githubRepoId}`, {
      headers: {
        Authorization: `Token ${req.body.accessToken}`,
      },
    })
    .then(async (response) => {
      const nextFreePortArray = await PortSchema.find();
      const nextFreePort = nextFreePortArray[0].nextFreePort;

      const filePath = "/etc/nginx/sites-available/default";
      const newServerBlock1 = `
      server {
        listen ${nextFreePort} default_server;
        listen [::]:${nextFreePort} default_server;
    
        root /var/www/html/${theProject.name}/build;
    
        index index.html index.htm index.nginx-debian.html;
    
        server_name ${theProject.name}.staticstorm.coderush.tech;
    
        location / {
            try_files $uri $uri/ /index.html;
        }
      }
      `;
      const newServerBlock2 = `
        server {
          listen 80;
          server_name ${theProject.name}.staticstorm.coderush.tech;
      
          location / {
              proxy_pass http://localhost:${nextFreePort};
              proxy_set_header Host $host;
              proxy_set_header X-Real-IP $remote_addr;
              proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          }
        }
      `;

      fs.readFile(filePath, "utf-8")
        .then((data) => {
          const newData = data + newServerBlock1 + newServerBlock2;
          return fs.writeFile(filePath, newData, "utf-8");
        })
        .then(() => {
          console.log("File updated!");
        })
        .catch((err) => {
          console.error(err);
        });

      const updatePort = await PortSchema.updateOne(
        { nextFreePort: nextFreePort },
        { nextFreePort: nextFreePort + 1 },
      );

      res.json({ success: true });
    })
    .catch((error) => {
      console.error(error);
      res.json({ success: false });
    });
});

router.post("/deleteconf", async (req, res) => {
  const theProject = await ProjectSchema.findById(req.body.projectId);
  const nginxConfigPath = "/etc/nginx/sites-available/default";
  const projectToRemove = `${theProject.name}.staticstorm.coderush.tech`;

  try {
    // Read the content of the nginx configuration file
    let nginxConfig = await fs.readFile(nginxConfigPath, "utf-8");
    // console.log(`Read nginx config: ${nginxConfig}`);

    // Find the two server blocks corresponding to the project to remove
    const serverBlockRegex = new RegExp(
      `\\s*server {\\s*listen 80;\\s*server_name ${projectToRemove};\\s*location / {\\s*proxy_pass http://localhost:${theProject.port};[^}]*}\\s*}`,
      "g",
    );
    const matches = nginxConfig.match(serverBlockRegex) || [];
    console.log(`Found ${matches.length} matches: ${matches}`);

    const serverBlocksToRemove = matches.join("");

    // Remove the server blocks from the nginx configuration file content
    nginxConfig = nginxConfig.replace(serverBlocksToRemove, "");
    // console.log(`Modified nginx config: ${nginxConfig}`);

    // Write the modified content back to the nginx configuration file
    await fs.writeFile(nginxConfigPath, nginxConfig);
    // console.log(`Wrote modified nginx config to ${nginxConfigPath}`);

    console.log(
      `Removed server blocks for project "${projectToRemove}" from nginx config.`,
    );
  } catch (err) {
    console.error(
      `Error removing project "${projectToRemove}" from nginx config: ${err}`,
    );
    return res.json({ success: false, err });
  }

  try {
    // Read the content of the nginx configuration file
    let nginxConfig = await fs.readFile(nginxConfigPath, "utf-8");

    // Find the server block corresponding to the project to remove
    const serverBlockRegex = new RegExp(
      `\\s*server {\\s*listen ${theProject.port} default_server;\\s*listen \\[::\\]:${theProject.port} default_server;\\s*root /var/www/html/${theProject.name}/build;\\s*index index.html index.htm index.nginx-debian.html;\\s*server_name ${projectToRemove};\\s*location / {\\s*try_files \\$uri \\$uri/ /index.html;\\s*}\\s*}`,
      "g",
    );
    const matches = nginxConfig.match(serverBlockRegex) || [];

    // Remove the server block from the nginx configuration file content
    const serverBlockToRemove = matches.join("");
    nginxConfig = nginxConfig.replace(serverBlockToRemove, "");

    // Write the modified content back to the nginx configuration file
    await fs.writeFile(nginxConfigPath, nginxConfig);

    console.log(
      `Removed server block for project "${projectToRemove}" from nginx config.`,
    );

    return res.json({ success: true });
  } catch (err) {
    console.error(
      `Error removing project "${projectToRemove}" from nginx config: ${err}`,
    );
    return res.json({ success: false, err });
  }
});

router.post("/deleteproject", async (req, res) => {
  const theProject = await ProjectSchema.findById(req.body.projectId);

  await fs.rmdir(`/projects/${theProject.name}`, { recursive: true });
  await fs.rmdir(`/var/www/html/${theProject.name}`, { recursive: true });

  if (theProject) {
    await theProject.delete();
    return res.json({ success: true });
  }
  res.json({ success: false });
});

router.post("/configurewebhook", async (req, res) => {
  const theProject = await ProjectSchema.findById(req.body.projectId);
  const theUser = await UserSchema.findOne({ githubId: theProject.ownerId });
  // Define the repository owner, repository name, and access token
  const owner = theUser.githubLogin;
  const repoId = theProject.githubRepoId;
  const accessToken = req.body.accessToken;

  // Make the HTTP request to get the repository information
  axios
    .get(`https://api.github.com/repositories/${repoId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "axios",
      },
    })
    .then((response) => {
      const repoName = response.data.name;

      // Define the payload for the webhook creation request
      const payload = {
        name: "web",
        config: {
          url: "http://abcd.staticstorm.coderush.tech/api/deploy/triggerwebhook",
          content_type: "json",
        },
        events: ["push"],
        active: true,
      };

      // Make the HTTP request to create the webhook
      axios
        .post(
          `https://api.github.com/repos/${owner}/${repoName}/hooks`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
              "User-Agent": "axios",
            },
          },
        )
        .then((response) => {
          console.log(`Webhook created: ${response.data.url}`);
          res.json({ success: true });
        })
        .catch((error) => {
          console.error(`Error creating webhook: ${error}`);
          res.json({ success: false });
        });
    })
    .catch((error) => {
      console.error(`Error getting repository information: ${error}`);
      res.json({ success: false });
    });
});

router.post("/triggerwebhook", async (req, res) => {
  // Retrieve the payload data from the request body
  const payload = req.body;
  console.log(`Received webhook for ${payload.repository.full_name}`);

  const theProject = await ProjectSchema.findOne({
    githubRepoId: payload.repository.id,
  });

  process.chdir(`/projects/${theProject.name}/${payload.repository.name}`);

  const pull = spawn("git", ["pull"]);

  let logs1 = "";

  pull.stdout.on("data", (data) => {
    logs1 += data.toString();
  });

  pull.stderr.on("data", (data) => {
    logs1 += data.toString();
  });

  pull.on("close", (code) => {
    console.log(logs1);
    if (code === 0) {
      process.chdir(`/projects/${theProject.name}/${payload.repository.name}`);

      const install = spawn("npm", [
        "install",
        "--legacy-peer-deps",
        "-C",
        theProject.rootDirectory,
      ]);

      let logs2 = "";

      install.stdout.on("data", (data) => {
        logs2 += data.toString();
      });

      install.stderr.on("data", (data) => {
        logs2 += data.toString();
      });

      install.on("close", (code) => {
        console.log(logs2);
        if (code === 0) {
          process.chdir(
            `/projects/${theProject.name}/${payload.repository.name}`,
          );

          const build = spawn("npm", [
            "run",
            "build",
            "-C",
            theProject.rootDirectory,
          ]);

          let logs4 = "";

          build.stdout.on("data", (data) => {
            logs4 += data.toString();
          });

          build.stderr.on("data", (data) => {
            logs4 += data.toString();
          });

          build.on("close", (code) => {
            console.log(logs4);
            if (code === 0) {
              const folderName = theProject.name; // name of the new folder
              const path = "/var/www/html"; // path to the parent directory of the new folder
              const folderPath = `${path}/${folderName}`; // full path to the new folder
              const mkdir = spawn("mkdir", [folderPath]); // create the new folder

              mkdir.on("close", () => {
                process.chdir(
                  `/projects/${theProject.name}/${payload.repository.name}`,
                ); // change the current working directory to the new folder
                process.chdir(theProject.rootDirectory); // change the current working directory to the new folder
                const copyBuild = spawn("cp", ["-rf", "build", folderPath]);

                let logs3 = "";

                copyBuild.stdout.on("data", (data) => {
                  logs3 += data.toString();
                });

                copyBuild.stderr.on("data", (data) => {
                  logs3 += data.toString();
                });

                copyBuild.on("close", (code) => {
                  if (code === 0) {
                    console.log(logs3);

                    return res.status(200).json({
                      logs3,
                      message: "Copied Successfully",
                    });
                  } else {
                    return res.status(500).json({
                      logs3,
                      message: "Failed to copy",
                    });
                  }
                });
              });
            } else {
              return res.status(500).json({
                logs4,
                message: "Build Failed",
              });
            }
          });
        } else {
          return res.status(500).json({
            logs2,
            message: "Failed to install dependencies",
          });
        }
      });
    } else {
      console.log(logs1);
      return res.status(500).json({
        logs1,
        message: "Failed to pull new code",
      });
    }
  });
});

router.post("/reloadnginx", async (req, res) => {
  const reload = spawn("systemctl", ["restart", "nginx"]);

  res.status(200).json({ success: true });
});

module.exports = router;
