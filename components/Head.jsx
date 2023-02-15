import React, { useState } from "react";
import {
    AppBar,
    IconButton,
    Button,
    Avatar,
    Badge,
} from "@react-native-material/core";

const Head= () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <AppBar
            title="Mohamed"
            leading={props => (
                <IconButton
                    icon={props => <Badge label="You" color="error" {...props} />}
                    {...props}
                />
            )}
            trailing={props =>
                loggedIn ? (
                    <IconButton
                        icon={<Avatar image={{ uri:"https://pbs.twimg.com/profile_images/1614678827468296192/A6ElT_yn_400x400.jpg"}} size={50} />}
                        onPress={() => setLoggedIn(!loggedIn)}
                        {...props}
                    ><Badge label="You" color="error" {...props} /></IconButton>
                ) : (
                    <Button
                        variant="text"
                        title="Login"
                        compact
                        style={{ marginEnd: 4 }}
                        onPress={() => setLoggedIn(!loggedIn)}
                        {...props}
                    />
                )
            }
        />
    );
};

export default Head;