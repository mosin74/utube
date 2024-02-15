
export function Filterdata(searchtext, videoList) {

  // console.log(videoList)
  const data = videoList.filter((video) => video?.snippet?.title?.toLowerCase()?.includes(searchtext?.toLowerCase()))
  return data
}



