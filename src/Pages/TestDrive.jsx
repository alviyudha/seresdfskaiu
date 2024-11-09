import TestDriveComp from '../Components/TestDriveComp'
import { BgTestDrive } from '../assets/Image/ImportImage'


export default function TestDrive() {
  return (
    <>
    <img src={BgTestDrive} className='img-fluid' alt="Bg Services DFSK" />
    <main className='BookingServices'>
      <div className="box-form shadow-lg ">
        <h1>Form Test Drive</h1>
        <p className='text-color-gray'>
          Untuk Booking tanggal Test Drive, Silahkan lengkapi data Anda pada form Berikut ini
        </p>
        <TestDriveComp />
      </div>
    </main>
    </>
  )
}
