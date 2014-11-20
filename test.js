
/**
 * This is the test case (test.js) for
 * the module on the left (index.js).
 */

import sin from './index'; // import the default fn
import { noise } from './index'; // import just noise

export function dsp(t) {
  return (sin(t, 440) + noise()) * 0.1;
}
