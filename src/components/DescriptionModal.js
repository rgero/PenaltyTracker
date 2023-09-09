import { useEffect, useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";

const DescriptionModal = () => {
    const [displayPopUp, setDisplayPopUp] = useState(true);

    // TODO - Fix this styling later
    const style = {
        fontFamily: "Montserrat",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "10px solid hotpink",
        boxShadow: 24,
        padding: 5,
        textAlign: "center",
        background: "#de4899"
    };

    useEffect(() => {
        let returningUser = localStorage.getItem("seenPopUp");
        setDisplayPopUp(!returningUser);
      }, []);

    const closePopUp = () => {
        // setting key "seenPopUp" with value true into localStorage
        localStorage.setItem("seenPopUp", true);
        setDisplayPopUp(false);
    };

    return (
        <>
            {/* conditional rendering, if displayPopUp is truthy we will show the modal */}
            {displayPopUp && (
            <Modal
                open={displayPopUp}
                onClose={closePopUp}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h3">
                        Welcome to the Penalty Tracker!
                    </Typography>
                    <Typography paddingBottom={5}>
                        Hopefully you will find all the penalty data useful, if you have any requests, please reach out. Don't worry, once you click OK you won't see this message again unless you clear your cookies.
                    </Typography>
                    <Button variant="contained" onClick={closePopUp}>OK</Button>
                </Box>
            </Modal>
            )}
        </>
    );
}

export default DescriptionModal;