import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { FaCalendarAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Box } from '@mui/material';
function DateSelector({ title }) {
  const [date, setDate] = useState(null);
  return (
    <div>
      <p>
        <FaCalendarAlt
          style={{
            color: '#FCA311',
            marginRight: '4px',
            display: 'inline-block',
          }}
        />
        <span className="text-darkBlue text-sm font-semibold ml-[7px]">
          {title}
        </span>
      </p>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box component="div" sx={{ width: 1 }}>
          <DatePicker
            disablePast
            margin="normal"
            openTo="day"
            views={['day']}
            value={date}
            onChange={(newDate) => setDate(newDate)}
            format="dd-MM-yyyy"
            disableHighlightToday
            slotProps={{
              openPickerIcon: {
                sx: {
                  color: '#14213D',
                },
              },
              textField: { fullWidth: true },
              popper: {
                sx: {
                  '& .MuiPaper-root': {
                    backgroundColor: '#e5e5e5',
                  },
                  '& .MuiPickersSlideTransition-root': {
                    '& .MuiPickersDay-root': {
                      '&.Mui-selected': {
                        backgroundColor: '#fca311',
                      },
                    },
                  },
                },
              },
            }}
            sx={{
              '& .MuiInputBase-input': {
                backgroundColor: 'lightgray',
                borderRadius: '4px',
                padding: '10px',
                fontSize: '12px',
              },
              backgroundColor: 'lightgrey',
              '&.MuiDateCalendar-root': {
                backgroundColor: 'blue',
              },
            }}
            componentsProps={{
              actionBar: {
                actions: ['clear'],
              },
            }}
          />
        </Box>
      </LocalizationProvider>
    </div>
  );
}

export default DateSelector;
