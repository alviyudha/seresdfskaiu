
import FormServiceComp from '../Components/FormServiceComp'
import { BgServices } from '../assets/Image/ImportImage'




export default function BookingServices() {
  return (
    <>
    <img src={BgServices} className='img-fluid' alt="Bg Services DFSK" />
    <main className='BookingServices'>
      <div className="box-form shadow-lg ">
        <h1>Form Booking Service</h1>
        <p className='text-color-gray'>
          Untuk Booking tanggal service, Silahkan lengkapi data Anda pada form Booking Service dibawah ini.
        </p>
        <FormServiceComp />
      </div>
    </main>
    </>
  )
}
