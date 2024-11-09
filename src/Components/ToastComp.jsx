// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Toast from 'react-bootstrap/Toast';

// export default function ToastComp() {
//   const [show, setShow] = useState(false);

//   // Fungsi untuk menampilkan Toast di tengah dan berada di tengah
//   const handleShowToast = () => {
//     setShow(true);
//   };

//   return (
//     <Row>
//       <Col xs={12} className="d-flex justify-content-center align-items-center">
//         <Button onClick={handleShowToast}>Show Toast</Button>
//       </Col>
//       <Col xs={12}>
//         <Toast
//           onClose={() => setShow(false)}
//           show={show}
//           delay={3000}
//           autohide
//           style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
//           // Menambahkan gaya CSS untuk posisi tengah
//         >
//           <Toast.Header>
//             <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
//             <strong className="me-auto">Bootstrap</strong>
//             <small>11 mins ago</small>
//           </Toast.Header>
//           <Toast.Body>Woohoo, youre reading this text in a Toast!</Toast.Body>
//         </Toast>
//       </Col>
//     </Row>
//   );
// }
