# Canvas Views

This is an experimental framework for modifying the functionality and style of a hosted instance of the Canvas LMS (Instructure), by injecting an MVC architecture on top of it, independent of the existing frameworks. The Canvas Views framework makes creating new pages and modifying existing pages simple. Handlebars allow for easy templating.

The hosted version of the Canvas LMS allows you to upload one CSS and one JS file that will appear on each page. The loaders handle the loading and processing of all external assets. The JS loads canvas-production.min.js via $.addScript(). The CSS loads canvas-production.css via an @import call.

JSRender is used as the templating system, and loaded via grunt-js-render.

## To Do

* Transition this to a React framework.
* Package and require all assets in the JS file, so they can be cached locally and not retrieved from the hosted server.
* Some queries may need to be run off a Node server. For example, calls to an internal API.

## Other Resources

* https://canvas.instructure.com/styleguide
* https://community.canvaslms.com/groups/admins/blog/2016/04/21/what-do-i-need-to-do-to-setup-kennethware-20-for-my-canvas-instance
* https://github.com/sfu/canvas-lms/blob/sfu-develop/public/sfu/js/sfu.js See functions like onPage() for telling the script to check the page before adding page-specific content.
* https://www.html5rocks.com/en/tutorials/webcomponents/customelements/
* https://svelte.technology/guide#what-is-svelte-