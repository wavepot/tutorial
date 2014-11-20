
/**
 * @name tutorial
 * @part 02-creating-projects
 * @org wavepot
 * @license pd
 * 
 * Creating your first project
 * ---------------------------
 * Press the plus sign + or the button `create` to
 * start a new project. All edits are preserved in
 * localStorage and across browser restarts so you
 * don't need to publish right away and keep the
 * project in an "editing" state.
 * 
 * You can publish as a gist or as a git
 * repository. Gists can be published anonymously
 * but to publish a repository you would need to
 * authorize with your GitHub account by pressing
 * on the GitHub logo in the home page.
 * 
 * The first comment serves as a project descriptor
 * or manifest. 
 * 
 * Types of projects
 * -----------------
 * There are two types of projects. Tracks and modules.
 * Initially the projects are considered to be tracks.
 * 
 * Modules
 * -------
 * To create a module you add a token @module <name>.
 * This creates a split view of `index.js` and `test.js`
 * and also the audio engine will now use the dsp
 * function defined in the test case instead.
 * 
 * Here's an example module:
 */

/**
 * @module foo
 * @author bar
 */

var tau = Math.PI * 2;

export default function sin(t, f) {
  return Math.sin(t * tau * f);
}

export function noise() {
  return Math.random() * 2 - 1;
}
