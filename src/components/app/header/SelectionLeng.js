import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {IconButton} from "@mui/material";
import {
    IconFlagES,
    IconFlagUS,
    IconFlagTR
} from 'material-ui-flags';
import Spanish from '../../../lang/es.json';
import Turk from '../../../lang/tr.json';
import English from '../../../lang/en.json';
import {FormattedMessage} from "react-intl";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderRadius: "0%",
        backgroundColor: '#1B1919',
        borderColor: 'white',
        paper: 'white'
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    title: {
        flexGrow: 1,
        backgroundColor: 'black',
    },
    iconMain: {
        "& > *": {
            margin: theme.spacing(1),
            width: theme.spacing(30),
            height: theme.spacing(8),
            maxWidth: 345,
        },
        backgroundColor: '#1B1919',
    },
    cardMediaIconMain: {
        backgroundColor: '#1B1919',
    }
}));


export default function SelectionLength({setMessage, locale, setLocale}) {
    const classes = useStyles();
    const handleChange = (event) => {
        switch (event.target.value) {
            case 'en-US':{
                setLocale('en-US');
                setMessage(English);
                break;
            }
            case 'es-ES':{
                setLocale('es-ES');
                setMessage(Spanish);
                break;
            }
            case 'tr-TR':{
                setLocale('tr-TR');
                setMessage(Turk);
                break
            }
        }
    }


    return (
        <Box sx={{ minWidth: 30 }} className={classes.toolbar}>
            <FormControl  >
                <Select
                    dropDownMenuProps={classes.toolbar}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={locale}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={'es-ES'}>
                        <IconButton>
                            <IconFlagES/>
                        </IconButton>
                    </MenuItem>
                    <MenuItem value={'en-US'}>
                        <IconButton>
                            <IconFlagUS/>
                        </IconButton>
                    </MenuItem>
                    <MenuItem value={'tr-TR'}>
                        <IconButton>
                            <IconFlagTR/>
                        </IconButton>
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );

}
