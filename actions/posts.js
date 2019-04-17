import axios from 'axios';
export const getPosts = () => {
  return dispatch => {
    fetch("https://api.stag.talentscreen.io/v1/lookup/currencies?limit=100").then(response => {
      response.json().then(json => {
        dispatch({
          type: "getPosts",
          payload: json
        })
      })
    })
  }

}

export const dataPost = (data) => {
  return dispatch => {
    console.log(data,"actions")
  axios.post("https://fgrsftg.firebaseio.com/name.json", {data})
      .then(res => {
        console.log(res, "jhgkj")
      })
      .catch(err => {
        console.log(err);
      })
  }


}





