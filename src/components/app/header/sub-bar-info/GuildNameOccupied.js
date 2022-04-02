import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { GiAbstract103 } from 'react-icons/gi';


export default function GuildNameOccupied({ftwInfo}) {

    return (
        <Grid item xl={3} lg={3} xs={3}>
            <Typography variant="h6">
                <GiAbstract103/> {`${ftwInfo.fortressName}  ${ftwInfo.guildName}`}
            </Typography>
        </Grid>
    )

}
