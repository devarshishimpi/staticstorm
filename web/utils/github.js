export async function fetchGitHubStars() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/devarshishimpi/staticstorm",
    );
    const data = await response.json();
    return data.stargazers_count;
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
    return 0;
  }
}
