import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'

function SignedIn({signOut}) {
    
    return (
        <div>
            <Image avatar spaced="right" src="https://static.shiftdelete.net/wp-content/uploads/2018/11/pokemon-detective-pikachu-fragman%C4%B1-yay%C4%B1nland%C4%B1-shiftdelete.jpg" />
            <Dropdown pointing="top left" text="Hoşgeldin Gökhan">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" />
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" />
                </Dropdown.Menu>
            </Dropdown>
        </div >
    )
}

export default SignedIn
