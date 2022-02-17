export const fetchData = async () => {
  try {
    const response = await fetch('https://randomuser.me/api')
    const { results } = await response.json()

    return results[0]
  } catch (e) {
    console.log(e)
  }
}
