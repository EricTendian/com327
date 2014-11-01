## Student Critiques

**Name:** Brian Semrau

**URL(s):**

* http://www.webhomework.geekkidconsulting.com/amazon
* https://github.com/thegeekkid/amazonloginredesign

**Redesign of:** Amazon.com

**Comments:**

Opening up the page with Google Chrome 38... Upon seeing the page for the first time, I thought the text was rather large but the form elements were prominently displayed. I see there is a search box and a login form, so I enter some random credentials and click submit. I see that after I click the alert, it directs me back with the inputs encoded in the URL. As this is a security risk, you can fix it by adding `method="post"` to your form element. Next I decide to register, so I notice the "I'm new here" checkbox and click it. Looks like I was directed to a new page with the registration form - I see you used some sort of shadow to make the input fields pop out from the page. Good use of humor on some of the labels. I also see you made use of the HTML5 form elements for dates and times, good work. At the top of the registration page I still see the login form - perhaps you want to hide this? It can be confusing for users. After I fill out the form and click submit, I get back to the prev. page with my submission in the URL - see my previous suggestion for how to change it so that isn't displayed. I see you have some other pages included in the project, my suggestion would be to focus first on just the login/signup form as this is the only page needed for the project (and then you can add other pages once you get good feedback on that form).

Some more technical items:

* The forms (and the site in general) do work without JavaScript enabled, nice job.
* I see you included the favicon `link` element twice in `index.html` - probably a mistake, so just remove one of those copies.
* In your CSS, there is cross-browser support for the fade effect, nice job as well.
* My suggestion for your CSS is to organize it better, grouping the standard HTML elements first, then page-specific IDs, and then any special effects like keyframes and media queries. Ensuring your indentation is standardized also makes your code more readable.
* In the `/subpage` directory, you have a second copy of `screen.css` - if you have two copies it can create problems when you update the design on the main site, or are trying to debug issues. I suggest you make use of relative paths and do `../screen.css` for referencing the CSS file in all of the subpages. You do something similar for the `products` folder, so just use relative paths as I mentioned and you won't have to copy the same files into a new place.
* Your commit messages are descriptive, good work on those.

Overall, I'm not thrilled with the design of the site, but technically you've got the forms laid out. I would suggest adding some attributes to your form tags to make them more accessible and login form specific.

---

**Name:** Jason DiBabbo

**URL(s):**

* http://pi.jasondibabbo.com/imdb/
* https://github.com/JasonDiBabbo/com327-login-form

**Redesign of:** IMDB.com

**Comments:**

After opening up your form (with Google Chrome 38), I'm immediately greeted by the IMDB logo - makes it easy for me to understand where I am. The header stating "Sign In or Sign Up" lets me know the actions I can perform. I am a new user, so I enter my email address, check the "I'm new here" box, and more fields appear. I complete the form with my dummy info, get a native browser alert for not using a valid email address (excellent), so I fix that and resubmit. I'm directed back to the page with the URL encoded with my form submission - adding the attribute `method="post"` can hide the form submission from showing in the URL. Deciding I want to login now, I enter the dummy info into the forms and click submit. Prompted me again to fix the email, nice. It did return to a URL just like registration, so if you fix both forms with that attribute I mentioned, it should resolve that issue. I see at the bottom you have three single-sign-on buttons, good use of Font Awesome for those icons.

Technically speaking...

* I see your HTML header has a couple different CSS files loaded - makes it really easy to see how the different CSS layers on top of each other, good job. One issue I noticed was that you have `text.css` included before `reset.css` so I fear that the styles set in `text.css` would be negated by the reset CSS.
* Great to see you make use of a web font loader - Lato and Roboto are also good choices.
* Including the `aria-hidden="true"` attribute, well done. I disabled JavaScript and saw the entire Sign Up form displayed, so your `no-js` class worked successfully.
* For your header image, you specify a width as a HTML attribute - while this may work, it is preferred to move that to CSS and separate markup from design. Also then you can use EMs for the width instead of pixels (default unit of the attribute).
* Looking at your JavaScript, I'm pleased to see you separated a set of DOM modifications into a function, that's a good practice when you're writing frontend code (especially with jQuery). jQuery has a tendency to get messy for large sites, but in this case it is relatively clean and readable.

Overall, I'm pleased with both the design and technical details of the page. The design does make it seem built for mobile devices (particularly with the header), but perhaps you can find a way to fill a bit more of the empty space, or make the emptiness seem less apparent.

---

**Name:** Yishan Huang

**URL(s):**

* http://yishanhuang.github.io/Project3/
* https://github.com/YishanHuang/Project3

**Redesign of:** Yelp.com

**Comments:**

Opened up your form with Google Chrome 38 and saw it was a Yelp! sign-in/sign-up form. The background image and Yelp! logo catches my eye. I notice you use web fonts for some of the headers, makes the page look more interesting. I would be careful with web fonts though, making sure the ones you use match the feel of the site and pair well with other fonts. The "Sign In" part is quite big and clear, seeing the two form fields with placeholders lets me know what those fields are. I notice you use a butterfly icon for the password field - changing it to a key or other password-like icon would confuse users less. It looks like you are using Bootstrap to do some of the form styling, so I would make sure that some of the styles from that get overwritten to give the form the same color scheme/style as the rest of the page and thus making it look less Bootstrap-y. The checkbox denoting the registration process is at the very bottom of the form, after the "Forgot your password" link, so moving that checkbox up to the top or near the top would help guide new users - existing users would already be familiar with the form and could just skip past that. You can also make it a lighter text color to make it more readable. After checking the box, I see a similar form for registration - as mentioned before, you may want to change the icon for the password. Something odd I noticed is that the first password box for registration has rounded corners on the left side, but not the right - take a look at your markup and CSS with some web developer browser extension and see if you can figure out the problem, or add a rule in your own CSS to add the `border-radius` manually. Looking at the bottom of the page, I see some Social Login buttons - looks good, but you may want to add some vertical padding to make the buttons match more with your other buttons. It's also a good idea to add padding at the very bottom of the page to create a space between the last button and the end of the page, giving people more room to press them.

Couple more technical notes:

* I see you are using some inline styling via the `style` attribute on your various HTML tags - try and move those to a CSS file instead and use CSS selectors to reduce the amount of typing you have to do. There's a lot of similar styles so it shouldn't be too difficult to combine them.
* In your HTML you include some images that are not locally hosted - I suggest you download a copy of those and add them to the repository, so you do not depend on any external resources which could break the site if the external host goes down.
* Make sure you add some system fonts as fallbacks for the web fonts you chose, so that those who can't render web fonts still get a decent experience.
* Running all your code through a validator should help you identify some technical issues and bring your code up to compliance with web standards.
* More descriptive commit messsages in your repository will help outsiders looking at the project, especially when they are trying to troubleshoot an issue for you.

Overall, I'm happy to see all the work you've put into the page so far. You've got some nice colors, the design just needs a little bit more refinement. I'm excited to see the finished product.
