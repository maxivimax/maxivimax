## 👋 𝐇𝐢 𝐭𝐡𝐞𝐫𝐞
<img src="https://i.pinimg.com/originals/3b/83/15/3b83155598486234070d9f736a9e389d.png">

## 📃 𝐒𝐨𝐦𝐞 𝐢𝐧𝐟𝐨 𝐚𝐛𝐨𝐮𝐭 𝐦𝐞

```javascript
var AboutMe = {
  baseInfo: {
    name: "Slava",
    sex: "man",
    nationality: "Russian"
  },
  
  code: ["JavaScript", "C++", "Python", "HTML5", "TypeScript"],
  os: ["macOS", "Windows", "Linux"],
  codeEditor: "VS Code",
  technologies: {
    tools: ["React", "NodeJS", "Storybook", "Styled-Components", "Jest", "Docker"],
    databases: ["GraphQL", "MySQL", "Apollo GraphQL", "PostgreSQL"],
    devices: ["Raspberry Pi", "Arduino"],
    misc: ["Heroku", "Google Cloud", "Git", "GitHub"]
  },
  
  links: {
    VK: "https://vk.com/maxivimax",
    Twitter: "https://twitter.com/maxivimax",
    E-Mail: "maxivimax@icloud.com"
  },
  currentFocus: "Automated recognition of the river ice filling percentage, push-up counting device"
}
```

#### 👷 Check out what I'm currently working on
{{range recentContributions 10}}
- [{{.Repo.Name}}]({{.Repo.URL}}) - {{.Repo.Description}} ({{humanize .OccurredAt}})
{{- end}}

#### ⭐ Recent Stars
{{range recentStars 10}}
- [{{.Repo.Name}}]({{.Repo.URL}}) - {{.Repo.Description}} ({{humanize .StarredAt}})
{{- end}}

#### ❤️ These awesome people sponsor me (thank you!)
{{range sponsors 5}}
- [{{.User.Login}}]({{.User.URL}}) ({{humanize .CreatedAt}})
{{- end}}

#### 👯 Check out some of my recent followers
{{range followers 5}}
- [{{.Login}}]({{.URL}})
{{- end}}

#### 💬 Feedback

Say Hello, I don't bite!

#### 📫 How to reach me

- Twitter: https://twitter.com/...
- Fediverse: https://mastodon.social/@...
- Blog: https://...

Want your own self-generating profile page? Check out [readme-scribe](https://github.com/muesli/readme-scribe)!
