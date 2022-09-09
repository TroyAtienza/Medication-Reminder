import { useState } from "react";

// Add Pill Types


// Add Pill Details
const onChangeStartDate = (event, selectedDate) => {
    if (event.type == 'set') {
      const currentDate = selectedDate || startDate;
      setShowStart(Platform.OS === 'android');
      setStartDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
      setTextStart(fDate);
    }
    setShowStart(false);
  }

  const onChangeEndDate = (event, selectedDate) => {
    if (event.type == 'set') {
      const currentDate = selectedDate || endDate;
      setShowEnd(Platform.OS === 'android');
      setEndDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
      setTextEnd(fDate);
    }
    setShowEnd(false);
  }

  const showModeStart = (currentMode) => {
    setShowStart(true);
    setModeStart(currentMode);
  }

  const showModeEnd= (currentMode) => {
    setShowEnd(true);
    setModeEnd(currentMode);
  }
 
  function sendValues(enteredName, enteredDescription, startDate, endDate) {
    new Pill(enteredName, enteredDescription);
  };


// Add Pill Time

// Login

// Registration
