export function getCurrentLocation (): Promise<{ lat: number; lng: number }> {
  if (!navigator.geolocation) {
    return Promise.reject(new Error('Geolocation is not supported'))
  } else {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        error => {
          reject(error)
        }
      )
    })
  }
}