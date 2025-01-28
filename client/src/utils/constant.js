export const SIDE_IMAGE_URL =
  "https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export const BASE_URL=location.hostname==="localhost"?"http://localhost:3000":"/api"

export  const userDataList = [
    {
      field: "username",
      placeholder: "Enter username",
    },
    { field: "email", placeholder: "Enter email" },
    { field: "password", placeholder: "Enter Password" },
    { field: "contact", placeholder: "Enter Contact Detail," },
    { field: "socialMediaUrl", placeholder: "Enter SocialMediaUrl" },
  ];