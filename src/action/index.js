import React from 'react';
import {userDetails} from '../constant';
function userData(result) {
  ({
    type:userDetails,
    payload:result,
  })
}

export default userData;