import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useState } from 'react';

export default function TestDriveComp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telp: '',
        address: '',
        carModel: '',
        dealer: 'Pilih Dealer',
      });
      const dealerWhatsAppNumbers = {
        'Pilih Dealer':'',
        'Pondok Indah': '+628567632265', // Nomor WhatsApp untuk Pondok Indah
        'Jakarta': '+628989637625', // Nomor WhatsApp untuk Jakarta
    };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Dapatkan data dari state
        const { name, email, telp, carModel, dealer,dateTestDrive,inputMessage } = formData;
    
        
        const whatsappNumber = dealerWhatsAppNumbers[dealer];
        if (!whatsappNumber) {
            alert('Silakan pilih dealer terlebih dahulu.');
            return;
          }
    
        const message = `Halo, Saya ingin melakukan Test Drive.\nNama: ${name}.\nEmail: ${email}\nTelp: ${telp}\nMobil yang diinginkan: ${carModel}.\nDealer Terdekat: ${dealer}.\n Jadwal Services: ${dateTestDrive}\nAlamat: ${inputMessage}`;
    
    
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
        // Redirect ke URL WhatsApp
        window.open(whatsappUrl, '_blank');
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
  return (
    <form onSubmit={handleSubmit} target='_blank'>
    <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Nama</Form.Label>
      <Form.Control
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Masukkan Nama Lengkap Anda"
      />
    </Form.Group>
      <Row className="mb-3">

    <Form.Group as={Col} controlId="formTelp">
      <Form.Label>Telp</Form.Label>
      <Form.Control
        type="tel"
        name="telp"
        value={formData.telp}
        onChange={handleInputChange}
        placeholder="Masukkan Nomor Telp Anda"
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Masukkan Alamat Email Anda"
      />
    </Form.Group>
    </Row>
    <Row className='mb-3'>
      <Form.Group as={Col} controlId="formSelectCar">
      <Form.Label>Models</Form.Label>
      <Form.Control
        as="select"
        name="carModel"
        value={formData.carModel}
        onChange={handleInputChange}
      >
        <option selected>Pilih Mobil</option>
        <option value="Seres E1">Seres E1</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formdateTestDrive">
      <Form.Label>Jadwal Test Drive</Form.Label>
      <Form.Control
        type="date"
        name="dateTestDrive"
        value={formData.dateTestDrive}
        onChange={handleInputChange}
      />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formSelectDealer">
      <Form.Label>Pilih Dealer Terdekat</Form.Label>
      <Form.Control
        as="select"
        name="dealer"
        value={formData.inputMessage}
        onChange={handleInputChange}
      >
        <option selected>Pilih Dealer</option>
        <option value="Pondok Indah">Pondok Indah</option>
        <option value="Jakarta">Jakarta</option>
      </Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId="fromAddress">
      <Form.Label>Pesan</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Masukkan Pesan"
      />
    </Form.Group>


    <Button variant="primary" type="submit">
      Submit
    </Button>
  </form>
  )
}
