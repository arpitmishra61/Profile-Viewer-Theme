import React, { useEffect, useState } from 'react'
import { backendUrl } from '../config/config'


const getProfilesFromBackend = async (setProfiles) => {
    const response = await fetch(backendUrl)

    const data = await response.json()
    setProfiles({ status: "fetched", data })
}

export default function Profiles() {

    const [profiles, setProfiles] = useState({ status: "loading", data: null })
    useEffect(() => {
        getProfilesFromBackend(setProfiles)

    }, [])
    if (profiles.status === "loading")
        return <div className="loading">
            <img src={require("./../images/loading.gif")} alt="" />
        </div>
    else
        if (profiles.data.length === 0)

            return <div className="no-profiles">
                <h3 className="bg-light p-3 ">No Profiles</h3>
            </div>


        else {
            console.log(profiles)
            return (
                <div className="  profileSectionContainer">


                    <div className="profileSection">

                        {profiles.data.map((profile, index) => <div className="card px-4 py-2 profile ">
                            <h5>{profile.name}</h5>
                            <img src={profile.avatar} alt="profile_details" />
                        </div>)
                        }</div>

                </div>

            )



        }
}
