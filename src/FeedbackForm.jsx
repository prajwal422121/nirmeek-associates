import {
  Button,
  Stack,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useEffect, useState } from "react";
import { adminDB, ref, push } from "./firebase";
import "./FeedbackForm.css";
import MainHeader from "./mainHeader";
import MainFooter from "./MainFooter";

const FeedbackForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    number: false,
    description: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitResult, setSubmitResult] = useState({
    success: null,
    message: "",
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateNumber = (number) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(String(number).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {
      firstName: !formData.firstName.trim(),
      lastName: !formData.lastName.trim(),
      email: !validateEmail(formData.email),
      number: !validateNumber(formData.number),
      description: !formData.description.trim(),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitResult({ success: null, message: "" });

    try {
      // Push data to admin database
      const submissionsRef = ref(adminDB, "submissions");
      await push(submissionsRef, {
        ...formData,
        createdAt: new Date().toISOString(),
      });

      setSubmitResult({
        success: true,
        message: "Form submitted successfully! We will get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        description: "",
      });
    } catch (error) {
      console.error("Firebase submission error:", error);
      setSubmitResult({
        success: false,
        message: "Error submitting form. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <MainHeader />
      <div
        className="form-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#EBEADF",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <Stack spacing={4} sx={{ maxWidth: "800px", width: "100%" }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} textAlign="center">
              <Typography variant="h3" sx={{ fontWeight: 600 }}>
                Get in touch
              </Typography>
              <Typography variant="subtitle1">
                Tell us about your project and we will return a proposal on all
                the permitting needs to meet your goals.
              </Typography>
            </Stack>

            {submitResult.message && (
              <Alert severity={submitResult.success ? "success" : "error"}>
                {submitResult.message}
              </Alert>
            )}

            <Stack spacing={3} sx={{ mt: 4 }}>
              <Stack direction="row" spacing={2}>
                <Stack spacing={1} sx={{ width: "50%" }}>
                  <Typography variant="body1">First Name:</Typography>
                  <TextField
                    id="firstName"
                    variant="outlined"
                    fullWidth
                    value={formData.firstName}
                    onChange={handleInputChange}
                    error={errors.firstName}
                    helperText={errors.firstName && "First name is required"}
                  />
                </Stack>
                <Stack spacing={1} sx={{ width: "50%" }}>
                  <Typography variant="body1">Last Name:</Typography>
                  <TextField
                    id="lastName"
                    variant="outlined"
                    fullWidth
                    value={formData.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
                    helperText={errors.lastName && "Last name is required"}
                  />
                </Stack>
              </Stack>

              <Stack spacing={1}>
                <Typography variant="body1">Email:</Typography>
                <TextField
                  id="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  helperText={errors.email && "Valid email is required"}
                />
              </Stack>

              <Stack spacing={1}>
                <Typography variant="body1">Phone Number:</Typography>
                <TextField
                  id="number"
                  variant="outlined"
                  fullWidth
                  value={formData.number}
                  onChange={handleInputChange}
                  error={errors.number}
                  helperText={errors.number && "number is required"}
                />
              </Stack>

              <Stack spacing={1}>
                <Typography variant="body1">Project Description:</Typography>
                <TextField
                  id="description"
                  multiline
                  rows={5}
                  variant="outlined"
                  fullWidth
                  value={formData.description}
                  onChange={handleInputChange}
                  error={errors.description}
                  helperText={errors.description && "Description is required"}
                />
              </Stack>

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isLoading}
                sx={{
                  bgcolor: "black",
                  color: "white",
                  py: 2,
                  "&:hover": {
                    bgcolor: "grey.900",
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                  },
                  transition: "all 0.3s ease",
                  alignSelf: "center",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                {isLoading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  "Send"
                )}
              </Button>
            </Stack>
          </form>
        </Stack>
        <MainFooter />
      </div>
    </>
  );
};

export default FeedbackForm;
