//
//  async and await
//

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x)
    }, 2000)
  })
}

//  with async and await
async function add (x) {
  console.time("add")
  let a = resolveAfter2Seconds(20)
  let b = resolveAfter2Seconds(30)
  console.timeEnd("add")
  return x + await a + await b
}

//  with Promise.all
function addP (x) {
  console.time("addP")
  console.timeEnd("addP")
  return Promise.all([
    resolveAfter2Seconds(20), 
    resolveAfter2Seconds(30)

  ]).then(([a, b]) => x + a + b)
}

add(10).then(console.log)
addP(10).then(console.log)

