import useLocationForm from "./useLocationForm";
import Select from "react-select";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import '../Cart.css'

function LocationForm() {
  const {
    state,
    onCitySelect,
    onDistrictSelect,
    onWardSelect,
    onSubmit
  } = useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard
  } = state;

  return (
    <form
      onSubmit={onSubmit}
      className="w-11/12 p-5 mx-auto mt-10 bg-gray-100 border-2 rounded md:w-2/3 sm:w-3/4 lg:w-1/2 xl:w-1/3"
    >
      <div className="flex-flex-col-gap-5">
        <FormControl fullWidth>
          <TextField id="outlined-basic" label="Họ tên" variant="outlined" size="small"/>
        </FormControl>

        <FormControl fullWidth>
          <TextField id="outlined-basic" label="Số điện thoại" variant="outlined" size="small"/>
        </FormControl>

        <FormControl fullWidth>
          <TextField id="outlined-basic" label="Email" variant="outlined" size="small"/>
        </FormControl>

        <FormControl fullWidth>
          <TextField id="outlined-basic" label="Địa chỉ" variant="outlined" size="small"/>
        </FormControl>
        
        <Select
          name="cityId"
          key={`cityId_${selectedCity?.value}`}
          isDisabled={cityOptions.length === 0}
          options={cityOptions}
          onChange={(option) => onCitySelect(option)}
          placeholder="Tỉnh/Thành"
          defaultValue={selectedCity}
        />

        <Select
          name="districtId"
          key={`districtId_${selectedDistrict?.value}`}
          isDisabled={districtOptions.length === 0}
          options={districtOptions}
          onChange={(option) => onDistrictSelect(option)}
          placeholder="Quận/Huyện"
          defaultValue={selectedDistrict}
        />

        <Select
          name="wardId"
          key={`wardId_${selectedWard?.value}`}
          isDisabled={wardOptions.length === 0}
          options={wardOptions}
          placeholder="Phường/Xã"
          onChange={(option) => onWardSelect(option)}
          defaultValue={selectedWard}
        />

        <FormControl fullWidth>
          <TextField id="outlined-basic" label="Ghi chú" variant="outlined" size="small"/>
        </FormControl>
      </div>
    </form>
  );
}

export default LocationForm;
