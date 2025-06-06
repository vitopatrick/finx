import React, { useState, useContext, useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Modal,
  Fade,
  Backdrop,
  Divider,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { store } from "../../firebase";
import { toast } from "react-toastify";
import { options } from "./options";
import { UserContext } from "../../context/UserContext";

const Withdrawal = () => {
  toast.configure();
  // form state
  const addressRef = useRef();
  const withdrawalAmtRef = useRef();
  // Bank fields
  const accountNameRef = useRef();
  const accountNumberRef = useRef();
  const bankNameRef = useRef();
  const bankBranchRef = useRef();
  const [value, setValue] = useState("");
  // Validation state
  const [amountError, setAmountError] = useState("");
  const [accountNumberError, setAccountNumberError] = useState("");
  // function to set modal open and close
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  // use the react router Hook
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  // function to get value
  const getValue = (id) => {
    const method = options.filter((option) => id === option.name);
    setValue(method[0].name);
    setOpen(true);
  };

  // function to get the method of withdraw and address
  const withdrawMethod = async () => {
    // Reset errors
    setAmountError("");
    setAccountNumberError("");
    let hasError = false;
    // Validate amount (must be a number and > 0)
    const amount = withdrawalAmtRef.current.value;
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setAmountError("Please enter a valid number amount");
      hasError = true;
    }
    // Validate bank account number if Bank Transfer
    if (value === "Bank Transfer") {
      const accountNumber = accountNumberRef.current.value;
      if (!accountNumber || !/^[0-9]+$/.test(accountNumber)) {
        setAccountNumberError("Account number must be digits only");
        hasError = true;
      }
    }
    if (hasError) return;
    try {
      //  first create the collection ref
      const collectionRef = collection(
        store,
        "users",
        `/${user.email}`,
        "withdrawal"
      );
      let withdrawalData = {
        amount: withdrawalAmtRef.current.value,
        date: serverTimestamp(),
        approved: false,
        method: value,
      };
      if (value === "Bank Transfer") {
        withdrawalData = {
          ...withdrawalData,
          accountName: accountNameRef.current.value,
          accountNumber: accountNumberRef.current.value,
          bankName: bankNameRef.current.value,
          bankBranch: bankBranchRef.current.value,
        };
      } else {
        withdrawalData = {
          ...withdrawalData,
          address: addressRef.current.value,
        };
      }
      await addDoc(collectionRef, withdrawalData);

      toast.success("Order Sent", { theme: "colored", position: "top-center" });

      navigate("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  // the style component
  const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -20%)",
    width: { xs: "90%", md: 600 },
    bgcolor: "background.paper",
    boxShadow: 24,
    p: { xs: 2, md: 3 },
  };

  return (
    <div>
      <Typography variant="h5" component="div" gutterBottom>
        Request Withdrawal
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          {options.map((option) => (
            <Grid item xs={12} md={3} key={option.name}>
              <Card>
                <CardContent>
                  <Box>
                    <Typography variant="h6" component="div">
                      {option.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                      mt: 2,
                    }}
                  >
                    <Typography variant="body1">Minimum Amount</Typography>
                    <Typography variant="subtitle1">
                      {option.minAmount}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => getValue(option.name)}
                    >
                      Request Withdrawal
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="body1"
              component="h2"
            >
              Payment will be sent through your selected method.
            </Typography>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {value === "Bank Transfer" ? (
                <>
                  <TextField
                    label="Account Name"
                    sx={{ mt: 3, mb: 2 }}
                    inputRef={accountNameRef}
                  />
                  <TextField
                    label="Account Number"
                    sx={{ mb: 2 }}
                    inputRef={accountNumberRef}
                    error={!!accountNumberError}
                    helperText={accountNumberError}
                  />
                  <TextField
                    label="Bank Name"
                    sx={{ mb: 2 }}
                    inputRef={bankNameRef}
                  />
                  <TextField
                    label="Bank Branch"
                    sx={{ mb: 3 }}
                    inputRef={bankBranchRef}
                  />
                </>
              ) : (
                <TextField
                  label="Enter Address"
                  sx={{ mt: 5, mb: 3 }}
                  inputRef={addressRef}
                />
              )}
              <TextField
                sx={{ mb: 3 }}
                label="Enter Amount"
                inputRef={withdrawalAmtRef}
                error={!!amountError}
                helperText={amountError}
                type="number"
                inputProps={{ min: 1 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={withdrawMethod}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Withdrawal;
