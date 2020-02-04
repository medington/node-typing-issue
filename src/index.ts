import bluebird from 'bluebird'

// This works with @types/node@12.12.26 but not with > 13
global.Promise = bluebird
bluebird.config({
  longStackTraces: true,
})

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

const p = delay(1)
// Promise._trace is a Bluebird property, use it to verify the global promise is hooked
console.debug(JSON.stringify((p as any)._trace, null, 2))
p.then(() => console.debug('done'))
