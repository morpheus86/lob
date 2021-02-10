const redirect = window.redirect;

const SECRET_COMBO = [1, 3, 5, 1];

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0],
});

function changeDialValue(index, incrementBy) {
  // This part is missing some code
  // This function is automatically called when the user clicks on a chevron
  // it will be called with a wheel index and an amount to change the value by
  // for example, if a user clicks on the "up" arrow for wheel 0
  // this will be called with arguments (0, 1) indicating we should raise the first dial's value by one
  // for example, if the user clicked the "down" arrow for the last wheel
  // this will be called with arguments (3, -1).

  // to change the state of the lock, simply make a call like
  // lockState.locked = false
  // or lockState.wheels[1] = 2
  // the lock will re-render itself when the value changes

  // When the lock is set to match the secretCombo
  // call the redirect() function with your name
  // eg: redirect('larry-lobster')
  // the redirect function will only redirect if the lockState is unlocked

  lockState.wheels[index] += incrementBy;
  const check_validity_of_combo = (entered_combo, secret_combo) => {
    let p1 = 0,
      p2 = 0;
    while (p1 < entered_combo.length && p2 < secret_combo.length) {
      let lock_num = entered_combo[p1];
      let secret_code_num = secret_combo[p2];
      if (lock_num !== secret_code_num) {
        return false;
      }
      p1++;
      p2++;
    }
    return true;
  };

  if (check_validity_of_combo(lockState.wheels, SECRET_COMBO)) {
    lockState.locked = false;
    redirect("tidiane-diallo");
  }
}

// let our other modules find our functions
window.lockState = lockState;
window.changeDialValue = changeDialValue;
