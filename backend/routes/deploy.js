const express = require('express');
const router = express.Router();
const UserSchema = require('../models/User');
const ProjectSchema = require('../models/Project');
// const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
// const fetchuser = require('../middleware/fetchuser');
const axios = require('axios');
const qs = require('querystring');
const { spawn } = require('child_process');

const JWT_SECRET = "AbhiIsASexyFuckin*GoodB$oy";









router.post('/', async (req, res) => {
    const { frameworkPreset, rootDirectory, subDomain, packageManager, githubRepoId } = req.body;

    axios.get(
        'https://api.github.com/user',
        {
            headers: {
                'Authorization': `Token ${req.body.accessToken}`
            }
        }
    ).then(async response => {
        // res.json(response.data);
        const theUser = await UserSchema.findOne({ githubId: response.data.id });
        if (!theUser) {
            return res.status(400).json({ success: false, error: "User don't exist" });
        }
        else {
            const project = await ProjectSchema.create({
                name: subDomain,
                packageManager,
                framework: frameworkPreset,
                rootDirectory,
                ownerId: theUser.githubId,
                githubRepoId
            });
            return res.status(200).json({ success: true, projectId: project._id });
        }
    })
    .catch(error => {
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




























router.post('/clone', async (req, res) => {
  const theProject = await ProjectSchema.findById(req.body.projectId);
  axios.get(
    `https://api.github.com/repositories/${theProject.githubRepoId}`,
    {
      headers: {
        'Authorization': `Token ${req.body.accessToken}`
      }
    }
  ).then(async response => {
    // console.log(response.data);
    const folderName = theProject.name; // name of the new folder
    const path = '/Users/devarshishimpi/Downloads/'; // path to the parent directory of the new folder
    const folderPath = `${path}/${folderName}`; // full path to the new folder
    const mkdir = spawn('mkdir', [folderPath]); // create the new folder

    mkdir.on('close', () => {
      process.chdir(folderPath); // change the current working directory to the new folder
      const gitClone = spawn('git', ['clone', `https://${req.body.accessToken}@github.com/${response.data.full_name}.git`]);

      let logs = '';

      gitClone.stdout.on('data', data => {
        logs += data.toString();
      });

      gitClone.stderr.on('data', data => {
        logs += data.toString();
      });

      gitClone.on('close', code => {
        if (code === 0) {
          return res.status(200).json({
            logs,
            message: 'Repository cloned successfully'
          });
        } else {
          return res.status(500).json({
            logs,
            message: 'Failed to clone repository'
          });
        }
      });
    });
  })
  .catch(error => {
    console.error(error);
    res.json({ success: false });
  });
});
















































router.post('/install', async (req, res) => {
    const theProject = await ProjectSchema.findById(req.body.projectId);
    axios.get(
      `https://api.github.com/repositories/${theProject.githubRepoId}`,
      {
          headers: {
              'Authorization': `Token ${req.body.accessToken}`
          }
      }
  ).then(async response => {
    // console.log(response.data);
    process.chdir(`/Users/devarshishimpi/Downloads/${theProject.name}/${response.data.name}`);

    const install = spawn('npm', ['install', '-C', theProject.rootDirectory]);
  
    let logs = '';
  
    install.stdout.on('data', data => {
      logs += data.toString();
    });
  
    install.stderr.on('data', data => {
      logs += data.toString();
    });
  
    install.on('close', code => {
      if (code === 0) {
        return res.status(200).json({
          logs,
          message: 'Dependencies installed successfully'
        });
      } else {
        return res.status(500).json({
          logs,
          message: 'Failed to install dependencies'
        });
      }
    });
  })
  .catch(error => {
      console.error(error);
      res.json({ success: false });
  });
});
















































router.post('/build', async (req, res) => {
    const theProject = await ProjectSchema.findById(req.body.projectId);
    axios.get(
      `https://api.github.com/repositories/${theProject.githubRepoId}`,
      {
          headers: {
              'Authorization': `Token ${req.body.accessToken}`
          }
      }
  ).then(async response => {
    // console.log(response.data);
    process.chdir(`/Users/devarshishimpi/Downloads/${theProject.name}/${response.data.name}`);

    const build = spawn('npm', ['run', 'build', '-C', theProject.rootDirectory]);
  
    let logs = '';
  
    build.stdout.on('data', data => {
      logs += data.toString();
    });
  
    build.stderr.on('data', data => {
      logs += data.toString();
    });
  
    build.on('close', code => {
      if (code === 0) {
        return res.status(200).json({
          logs,
          message: 'Build successful'
        });
      } else {
        return res.status(500).json({
          logs,
          message: 'Build Failed'
        });
      }
    });
  })
  .catch(error => {
      console.error(error);
      res.json({ success: false });
  });
});
















































router.post('/copybuild', async (req, res) => {
  const theProject = await ProjectSchema.findById(req.body.projectId);
  axios.get(
    `https://api.github.com/repositories/${theProject.githubRepoId}`,
    {
      headers: {
        'Authorization': `Token ${req.body.accessToken}`
      }
    }
  ).then(async response => {
    // console.log(response.data);
    const folderName = theProject.name; // name of the new folder
    const path = '/Users/devarshishimpi/abc/'; // path to the parent directory of the new folder
    const folderPath = `${path}/${folderName}`; // full path to the new folder
    const mkdir = spawn('mkdir', [folderPath]); // create the new folder

    mkdir.on('close', () => {
      process.chdir(`/Users/devarshishimpi/Downloads/${theProject.name}/${response.data.name}`); // change the current working directory to the new folder
      process.chdir(theProject.rootDirectory); // change the current working directory to the new folder
      const copyBuild = spawn('cp', ['-rf', 'build', folderPath]);

      let logs = '';

      copyBuild.stdout.on('data', data => {
        logs += data.toString();
      });

      copyBuild.stderr.on('data', data => {
        logs += data.toString();
      });

      copyBuild.on('close', code => {
        if (code === 0) {
          return res.status(200).json({
            logs,
            message: 'Copied Successfully'
          });
        } else {
          return res.status(500).json({
            logs,
            message: 'Failed to copy'
          });
        }
      });
    });
  })
  .catch(error => {
    console.error(error);
    res.json({ success: false });
  });
});


module.exports = router;