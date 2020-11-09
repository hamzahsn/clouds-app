import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import { Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 100
    }
}))

const Clouds = ({ clouds }: any) => {
    const [data, setData] = useState(clouds)
    const classes = useStyles()
    const filterValue = (value: any) => {
        if (value) {
            const filtered = clouds.filter((d: any) => value === d.cloud_name.split('-')[0])
            setData(filtered)
        } else {
            setData(clouds)
        }
    }

    const columns = [
        {
            title: 'Description',
            field: 'cloud_description',
            filterComponent: (props: unknown) => {
                return (
                    <FormControl className={classes.formControl}>
                        <InputLabel>Cloud provider</InputLabel>
                        <Select onChange={e => filterValue(e.target.value)}>
                            <MenuItem value={'aws'}>Amazon</MenuItem>
                            <MenuItem value={'azure'}>Azure</MenuItem>
                            <MenuItem value={'google'}>Google</MenuItem>
                            <MenuItem value={'do'}>Do</MenuItem>
                            <MenuItem value={'upcloud'}>Upcloud</MenuItem>
                        </Select>
                    </FormControl>
                )
            }
        },
        { title: 'Name', field: 'cloud_name', filtering: true },
        { title: 'Latitude', field: 'geo_latitude', filtering: true },
        { title: 'Longitude', field: 'geo_longitude', filtering: true },
        { title: 'ID', field: 'id', filtering: false, hidden: true }
    ]
    return (
        <div className="App">
            <MaterialTable
                title="Select a cloud provider from down"
                columns={columns}
                data={data}
                options={{
                    filtering: true
                }}
            />
        </div>
    )
}

export default Clouds
