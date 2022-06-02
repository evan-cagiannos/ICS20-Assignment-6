/* Created by: Evan Cagiannos
   Created on: May 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Assignment-6/sw.js", {
    scope: "/ICS20-Assignment-6/",
  })
}

/**
 * Input.
 */

 const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("image").innerHTML =
    '<img src="' + 
      jsonData.url + 
      '" alt="API Catgirl Image" ' +
      '>'
  } catch (err) {
    console.log(err)
  }
}

getImage("https://nekos.best/api/v2/neko")