import bluebird from 'bluebird'

global.Promise = bluebird
bluebird.config({
  longStackTraces: true,
})

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
  // return new bluebird( resolve => setTimeout(resolve, ms) );
  // return new Promise(() => { throw new Error('boom') } );
}

console.log("sleeping...")
const p = delay(100)
  p .then(() => console.debug(p.constructor.name))
