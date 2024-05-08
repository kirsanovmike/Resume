export const getUserId = (name:string) => new Promise((resolve) => {
  console.log({name})
  resolve({
    data: "111",
    status: 200
  })
})
