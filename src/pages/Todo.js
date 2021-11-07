// import React from "react";

// import DeleteIcon from "@material-ui/icons/Delete";
// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// import { Card, IconButton } from "@material-ui/core";
// import { useState } from "react";
// import cuid from "cuid";
// import { QRCode } from "react-qr-svg";

// import "../../src/pages/TodoStyle.css";

// export default function Todo() {
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");
//   const [nationality, setNationality] = useState("");
//   const [image, setImage] = useState("");
//   const [userData, setUserData] = useState(users);

//   const handleId = (e) => {
//     setId(e.target.value);
//   };

//   const handleName = (e) => {
//     setName(e.target.value);
//   };

//   const handleDate = (e) => {
//     setDate(e.target.value);
//   };

//   const handleNationality = (e) => {
//     setNationality(e.target.value);
//   };

//   const handleImage = (e) => {
//     setImage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const value = {
//       id,
//       name,
//       date,
//       nationality,
//       image,
//     };

//     setUserData([...userData, value]);
//     setId("");
//     setName("");
//     setDate("");
//     setNationality("");
//     setImage("");
//   };

//   const handleClick = () => {
//     setId(cuid());
//   };

//   const handleDelete = (id) => {
//     setUserData(userData.filter((user) => user.id !== id));
//   };

//   const handleUpdate = (user) => {
//     setId(user.id);
//     setName(user.name);
//     setDate(user.date);
//     setNationality(user.nationality);
//     setImage(user.image);

//     setUserData(userData.filter((user) => user.id !== id));
//   };

//   return (
//     <div className="Todo">
//       <form onSubmit={(e) => handleSubmit(e)} className="form-in">
//         <div>
//           <input
//             onChange={(e) => handleId(e)}
//             className="input"
//             placeholder="ID"
//             value={id}
//             type="text"
//           />
//           <IconButton onClick={handleClick}>
//             <AddCircleOutlineIcon style={{ color: "green" }} />
//           </IconButton>
//         </div>
//         <input
//           onChange={(e) => handleName(e)}
//           className="in-put"
//           placeholder="NAME"
//           type="name"
//           value={name}
//         />
//         <input
//           onChange={(e) => handleDate(e)}
//           className="in-put"
//           placeholder="BORN IN"
//           type="date"
//           value={date}
//         />
//         <input
//           onChange={(e) => handleNationality(e)}
//           className="in-put"
//           placeholder="Nationality"
//           type="text"
//           value={nationality}
//         />
//         <input
//           onChange={(e) => handleImage(e)}
//           className="in-put"
//           placeholder="Image"
//           value={image}
//         />
//         <button className="btn_primary">submit</button>
//       </form>

//       <div style={{ marginTop: 100, width: "80%", marginLeft: "10%" }}>
//         <h1
//           className="main_title"
//           style={{ textAlign: "center", marginBottom: 200, marginTop: 300 }}
//         >
//           Receive your ID
//         </h1>
//         <div style={{ flexWrap: "wrap" }} className="flex">
//           {userData.map((user) => (
//             <Card style={{ width: 350, margin: 20 }}>
//               <img src={user.image} alt="images" className="img" />
//               <div style={{ marginTop: 6 }} className="flex">
//                 <h2 className="color">ID:</h2>
//                 <h3>{user.id}</h3>
//               </div>
//               <div style={{ marginTop: 6 }} className="flex">
//                 <h2 className="color">Name :</h2>
//                 <h3> {user.name} </h3>
//               </div>
//               <div style={{ marginTop: 6 }} className="flex">
//                 <h2 className="color">Born In :</h2>
//                 <h3> {user.date} </h3>
//               </div>
//               <div style={{ marginTop: 6 }} className="flex">
//                 <h2 className="color">Nationality :</h2>
//                 <h3> {user.nationality} </h3>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <div>
//                   <QRCode
//                     bgColor="#FFFFFF"
//                     fgColor="#000000"
//                     level="Q"
//                     style={{ width: 40, marginTop: 5, marginLeft: 20 }}
//                     value={user.id}
//                   />
//                 </div>
//                 <div>
//                   <bottom
//                     className="btn_secondary"
//                     type="submit"
//                     onClick={() => handleUpdate(user)}
//                     style={{
//                       width: 100,
//                       height: 40,
//                       backgroundColor: "#027373",
//                       marginTop: 20,
//                       borderRadius: 20,
//                       outline: "none",
//                       border: "none",
//                       color: "#fff",
//                     }}
//                   >
//                     update
//                   </bottom>
//                 </div>
//                 <div>
//                   <IconButton
//                     style={{ marginTop: 20, marginLeft: 20 }}
//                     onClick={() => handleDelete(user.id)}
//                   >
//                     <DeleteIcon style={{ color: "red" }} />
//                   </IconButton>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const users = [
//   {
//     id: "2037809850394853", //FIXME:
//     image: "https://wallpapercave.com/wp/wp7162705.jpg",
//     name: "sera ahmed",
//     nationality: "egypt",
//     date: "12/1/1998",
//   },
// ];
