import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Chip, Typography } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 190,
    },
  },
};

const names = [
    'Intake Form',
    'Insights',
    'Returning',
    'Verification',
    'Expired',
    'Filter by Tag'
];

const chips = {
    'Intake Form': {value: 2, color: '#3D71F5'},
    'Insights': {value: 3, color: '#B24AF1'},
    'Returning': {value: 0, color: '#FE8900'},
    'Verification': {value: 4, color: '#00b0b5'},
    'Expired': {value: 4, color: '#929292'},
    'Filter by Tag': {value: 0, color: '#00b0b5'}
}

export default function DropDownComponent() {
  const [personName, setPersonName] = React.useState(['Filter by Tag']);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 190, paddingY: 0 }} 
        InputLabelProps={{ shrink: true }}
      >
        <Select
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => selected[0]}
          MenuProps={MenuProps}
          size='small'
          input={<OutlinedInput sx={{fontSize: '0.875rem'}} />}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} sx={{display: name==='Filter by Tag'? 'none' : ''}}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <Typography fontSize={'0.875rem'}>{name}</Typography>
              <Chip label={chips[name].value} sx={{background: chips[name].color, marginLeft: 1, color: 'white'}} size="small" />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
