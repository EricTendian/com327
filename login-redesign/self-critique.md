# Self-Critique <!-- 1-2p self-critique -->
## Login Form Redesign
### Oct. 31, 2014

For this project, I chose to redesign the [Hacker News](https://news.ycombinator.com/) [login/signup form](https://news.ycombinator.com/login?whence=news). Here's what it looked like before and after:

![Hacker News login, before and after](before-after.png "Left - before the redesign; Right - after the redesign")

You can view the form live here:

* <http://erictendian.github.io/com327/login-redesign/>
* <http://erictendian.github.io/com327/login-redesign/?status_message=Bad%20login.> (with a status message)

I chose to do the Hacker News login form as this was the most basic combination login/signup form I could find - the HTML was very basic, making use of tables for layout, and it was not particularly user-friendly or had much personality that the rest of the site has. The challenge was to make a better combination of the two forms, while still retaining a simple and hacker-ish feel that the original form had. To do this, I took the same color scheme from the main Hacker News site, the same flat design, and kept the form simple - no images, minimal JavaScript, and few buttons/actions.

I'm pleased with the final outcome of the project. It makes use of the Hacker News color scheme to give the login page the same feel as the rest of the site, while not adding too much extra flair. The design takes the existing login page and makes it even more simple in some aspects, combining the two sets of fields into one set, with an extra checkbox. Some may argue that this confuses the purpose of the page, but having the checkbox first gives it prominence for new users. Upon checking the "Create a new account?" checkbox, the page copy automatically switches from a login page to a signup page, done through CSS. This needs little JavaScript because I made use of CSS sibling selectors and the `content` property. There is also support for the status messages that the original form, taking on a terminal-like feel with a black bar and green monospaced text.

However, there are always ways to improve this project. [things to improve/what didn't go well]
