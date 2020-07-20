import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles'
import {Tab, Button, Input} from '@material-ui/core'
import {TabPanel, TabList, TabContext} from '@material-ui/lab'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    }
}))

export default function Board () {
    const [value, setValue] = React.useState('login')

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue)
    }
    return (
            <div className={useStyles.prototype}>
                <TabContext value={value}>
                    <TabList onChange={handleChange}>
                        <Tab value={"login"} label={'Login'} color={"gray"} onClick={() => console.log('Login tab click')}/>
                        <Tab value={"register"} onClick={() => console.log('register tab click')} label={'Register'}/>
                    </TabList>
                <TabPanel value={"login"}>
                    <form className={"loginTab"}>
                        <Input type={"email"} required={true} name={"login[username]"} placeholder={"Username"}/> <br/>
                        <Input type={"password"} required={true} name={"login[password]"} placeholder={"Password"}/> <br/>
                        <Button type={"submit"} onClick={() => console.log('Login button click')}>Login</Button>
                    </form>
                </TabPanel>
                <TabPanel value={"register"}>
                    <form className={"registerTab"}>
                        <Input type={"email"} required={true} name={"login[username]"} placeholder={"Username"}/><br/>
                        <Input type={"password"} required={true} name={"login[password]"} placeholder={"Password"}/><br/>
                        <Input type={"password"} required={true} name={"login[password]"} placeholder={"Confirm Password"}/><br/>
                        <Input type={"checkbox"}/><br/>
                        <Button type={"submit"} onClick={() => console.log('Register button click')}>Register</Button>
                    </form>
                </TabPanel>
                </TabContext>
            </div>
        );
}