import React from 'react';
import './Form.css';

function TemplateFrom() {
  return (
    <div>


      <form className='form-style'>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="">First Name</label>
            <input type="text" class="form-control" id="" placeholder="FirstName" />
          </div>
          <div class="form-group col-md-6">
            <label for="">Last Name</label>
            <input type="text" class="form-control" id="" placeholder="LastName" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div class="form-group col-md-6">
            <label for="">Phone</label>
            <input type="numbers" class="form-control" id='' placeholder="Phone-Number" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Adress" />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" placeholder='city' />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose State</option>
              <option>
                Andhra Pradesh
                (Amaravati)
</option>

              <option>
                Arunachal Pradesh
                (Itanagar)
</option>

              <option>
                Assam
                (Dispur)
</option>

              <option>
                Bihar
                (Patna)
</option>

              <option>
                Chhattisgarh
                (Raipur)
</option>

              <option>
                Goa
                (Panaji)
</option>

              <option>
                Gujarat
                (Gandhinagar)
</option>

              <option>
                Haryana
                (Chandigarh)
</option>

              <option>
                Himachal Pradesh
                (Shimla)
</option>

              <option>
                Jharkhand
                (Ranchi)
</option>

              <option>
                Karnataka
                (Bangalore)
</option>

              <option>
                Kerala
                (Thiruvananthapuram)
</option>

              <option>
                Madhya Pradesh
                (Bhopal)
</option>

              <option>
                Maharashtra
                (Mumbai)
</option>

              <option>
                Manipur
                (Imphal)
</option>

              <option>
                Meghalaya
                (Shillong)
</option>

              <option>
                Mizoram
                (Aizawl)
</option>

              <option>
                Nagaland
                (Kohima)
</option>

              <option>
                Odisha
                (Bhubaneshwar)
</option>

              <option>
                Punjab
                (Chandigarh)
</option>

              <option>
                Rajasthan
                (Jaipur)
</option>

              <option>
                Sikkim
                (Gangtok)
</option>

              <option>
                Tamil Nadu
                (Chennai)
</option>

              <option>
                Telangana
                (Hyderabad)
</option>

              <option>
                Tripura
                (Agartala)
</option>

              <option>
                Uttarakhand
                (Dehradun)
</option>

              <option>
                Uttar Pradesh
                (Lucknow)
</option>

              <option>
                West Bengal
                (Kolkata)
</option>

              <option>
                Andaman and Nicobar Islands
                (Port Blair)
</option>

              <option>
                Chandigarh
                (Chandigarh)
</option>

              <option>
                Dadra and Nagar Haveli and
                Daman & Diu
                (Daman)
</option>

              <option>
                The Government of NCT of Delhi
                (Delhi)
</option>

              <option>
                Jammu & Kashmir
                (Srinagar-S*, Jammu-W*)
</option>

              <option>
                Ladakh
                (Leh)
</option>

              <option>
                Lakshadweep
                (Kavaratti)
</option>

              <option>
                Puducherry
                (Puducherry)
</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
      </label>
          </div>
        </div>
        <div className='back-button'>
          <button type="button" class="btn btn-danger">Back</button>
      
     
          <button type="button" class="btn btn-primary">Save & Next</button>
        </div>
      </form>
    </div>
  )
}
export default TemplateFrom;