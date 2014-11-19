
/**
 * @name tutorial
 * @part 01-getting-started
 * @org wavepot
 * @license pd
 * 
 * Getting started
 * ---------------
 * 
 * This is a live dsp editor.
 * 
 * Function `dsp` is invoked with the parameter `t` that
 * represents the time in seconds since we pressed play.
 * 
 * Our job is to return sample values (range -1..1)
 * to "draw" the audio waveform.
 * 
 * A waveform looks like this:
 * 
 *   vol
 *    +1  dsp(t=0.1)
 *     |     /\      /\
 *    0|____/__\___ /__\__ t
 *     |\  /    \  /
 *     | \/      \/
 *    -1      dsp(t=0.2)
 * 
 * Below is the most basic example producing
 * a single sine wave oscillating at 440 Hz:
 * 
 * (note: it may be loud! lower your speakers!)
 */

export function dsp(t) {
  return Math.sin(t * Math.PI * 2 * 440);
}

/**
 * ### Exercise:
 * 
 * Complete the function to accept a frequency in Hz and return a sample:
 */

function sin(){
  //
}
