function animation() {
  const box = document.getElementById("box");
  console.log(box.classList); // Just for testing
  box.classList.toggle("active"); // Add/remove the "active" class onClick
}

function showExplanation() {
  const dropdown = document.getElementById("appDropdown");
  const explanation = document.getElementById("appExplanation");
  const selectedApp = dropdown.value;

  let text = "";

  switch (selectedApp) {
    case "notion":
      text =
        "Notion is an all-in-one workspace where you can write, plan, collaborate, and organize. It's a tool for note-taking, project management, and more.";
      break;
    case "google-maps":
      text =
        "Google Maps is a web mapping service developed by Google. It provides satellite imagery, aerial photography, street maps, real-time conditions, and route planning.";
      break;
    case "youtube":
      text =
        "YouTube is a video-sharing platform where users can upload, view, and share videos. It's also a platform for content creators to build audiences and monetize their content.";
      break;
    case "chatgpt":
      text =
        "ChatGPT is a language model developed by OpenAI. It's designed to engage in conversations, answer questions, and generate human-like text based on input prompts.";
      break;
    default:
      text = "";
  }

  explanation.textContent = text;
}
