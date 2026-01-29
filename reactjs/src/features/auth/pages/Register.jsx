import { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    // Handle registration logic here
    console.log('Registering user:', form);

    // fake token
    localStorage.setItem('token', 'dummy-token');

    //redirect to dashboard
    navigate('/dashboard');
  };

  const handleGoogleSignup = () => {
    // learning purpose: fake Google signup
    console.log('Signing up with Google');

    // fake token
    localStorage.setItem('token', 'google-dummy-token');

    //redirect to dashboard
    navigate('/dashboard');
  };

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'firstName':
        if (!value.trim()) {
          error = 'First name is required';
        } else if (value.trim().length < 2) {
          error = 'First name must be at least 2 characters';
        }
        break;
      case 'lastName':
        if (!value.trim()) {
          error = 'Last name is required';
        } else if (value.trim().length < 2) {
          error = 'Last name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 6) {
          error = 'Password must be at least 6 characters';
        }
        break;
      case 'confirmPassword':
        if (!value) {
          error = 'Please confirm your password';
        } else if (value !== form.password) {
          error = 'Passwords do not match';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(form).forEach(key => {
      const error = validateField(key, form[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    // Mark all fields as touched
    const allTouched = {};
    Object.keys(form).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      handleRegister();
    }
  };

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        overflow: { xs: 'auto', md: 'hidden' },
        position: { xs: 'relative', md: 'fixed' },
        top: 0,
        left: 0,
        '@keyframes slideInLeft': {
          from: {
            opacity: 0,
            transform: 'translateX(-50px)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        '@keyframes slideInRight': {
          from: {
            opacity: 0,
            transform: 'translateX(50px)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        '@keyframes float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        '@keyframes pulse': {
          '0%, 100%': {
            opacity: 0.6,
          },
          '50%': {
            opacity: 1,
          },
        },
      }}>
      {/* Left Side - Register Form */}
      <Box
        sx={{
          width: { xs: '100%', md: '45%' },
          minHeight: { xs: '100vh', md: '100vh' },
          background: '#0a0a0a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: 3, sm: 4, md: 6 },
          position: 'relative',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}>
        {/* Background Decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255, 68, 68, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />

        <Box
          sx={{
            width: '100%',
            maxWidth: '450px',
            animation: 'slideInLeft 0.8s ease-out',
            py: { xs: 2, md: 0 },
          }}>
          {/* Logo/Brand */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant='h3'
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '3rem' },
                background: 'linear-gradient(135deg, #ff4444 0%, #4cc9f0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '3px',
                mb: 1,
              }}>
              SCORE CORE
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '1rem',
                fontWeight: 500,
              }}>
              Create your account and start tracking today.
            </Typography>
          </Box>

          {/* Register Form */}
          <Box component='form'>
            <Grid
              container
              spacing={2}>
              <Grid
                item
                xs={12}
                sm={6}>
                <TextField
                  name='firstName'
                  label='First Name'
                  type='text'
                  value={form.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  fullWidth
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.6)',
                      '&.Mui-focused': {
                        color: '#ff4444',
                      },
                    },
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.15)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 68, 68, 0.4)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#ff4444',
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiFormHelperText-root': {
                      color: '#ff4444',
                    },
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}>
                <TextField
                  name='lastName'
                  label='Last Name'
                  type='text'
                  value={form.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  fullWidth
                  sx={{
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.6)',
                      '&.Mui-focused': {
                        color: '#4cc9f0',
                      },
                    },
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.15)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(76, 201, 240, 0.4)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4cc9f0',
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiFormHelperText-root': {
                      color: '#ff4444',
                    },
                  }}
                />
              </Grid>
            </Grid>

            <TextField
              name='email'
              label='Email Address'
              type='email'
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              fullWidth
              margin='normal'
              sx={{
                mt: 2,
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.6)',
                  '&.Mui-focused': {
                    color: '#ff4444',
                  },
                },
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 68, 68, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ff4444',
                    borderWidth: '2px',
                  },
                },
                '& .MuiFormHelperText-root': {
                  color: '#ff4444',
                },
              }}
            />

            <TextField
              name='password'
              label='Password'
              type='password'
              value={form.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              fullWidth
              margin='normal'
              sx={{
                mt: 2,
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.6)',
                  '&.Mui-focused': {
                    color: '#4cc9f0',
                  },
                },
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(76, 201, 240, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#4cc9f0',
                    borderWidth: '2px',
                  },
                },
                '& .MuiFormHelperText-root': {
                  color: '#ff4444',
                },
              }}
            />

            <TextField
              name='confirmPassword'
              label='Confirm Password'
              type='password'
              value={form.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.confirmPassword && !!errors.confirmPassword}
              helperText={touched.confirmPassword && errors.confirmPassword}
              fullWidth
              margin='normal'
              sx={{
                mt: 2,
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.6)',
                  '&.Mui-focused': {
                    color: '#ff4444',
                  },
                },
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 68, 68, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ff4444',
                    borderWidth: '2px',
                  },
                },
                '& .MuiFormHelperText-root': {
                  color: '#ff4444',
                },
              }}
            />

            <Button
              variant='contained'
              fullWidth
              onClick={handleSubmit}
              sx={{
                mt: 3,
                py: 1.6,
                borderRadius: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #ff4444 0%, #4cc9f0 100%)',
                textTransform: 'none',
                letterSpacing: '1px',
                boxShadow: '0 4px 20px rgba(255, 68, 68, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #4cc9f0 0%, #ff4444 100%)',
                  boxShadow: '0 6px 30px rgba(255, 68, 68, 0.5)',
                  transform: 'translateY(-2px)',
                },
              }}>
              Create Account
            </Button>

            <Divider
              sx={{
                my: 2.5,
                '&::before, &::after': {
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}>
              <Typography
                variant='caption'
                sx={{ color: 'rgba(255, 255, 255, 0.4)', px: 2 }}>
                OR
              </Typography>
            </Divider>

            <Button
              variant='outlined'
              fullWidth
              startIcon={<GoogleIcon />}
              onClick={handleGoogleSignup}
              sx={{
                py: 1.4,
                borderRadius: 2,
                fontSize: '1rem',
                fontWeight: 600,
                color: '#fff',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  transform: 'translateY(-2px)',
                },
              }}>
              Continue with Google
            </Button>

            <Typography
              variant='body2'
              align='center'
              sx={{ mt: 3, color: 'rgba(255, 255, 255, 0.5)' }}>
              Already have an account?{' '}
              <Box
                component='span'
                onClick={() => navigate('/login')}
                sx={{
                  color: '#ff4444',
                  fontWeight: 700,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}>
                Login here
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Side - Hero Section */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          width: '55%',
          height: '100vh',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 6,
          position: 'relative',
          overflow: 'hidden',
        }}>
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(76, 201, 240, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '15%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(255, 68, 68, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite',
          }}
        />

        <Box
          sx={{
            textAlign: 'center',
            zIndex: 1,
            animation: 'slideInRight 0.8s ease-out',
          }}>
          {/* Main Headline */}
          <Typography
            variant='h2'
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              color: '#fff',
              mb: 3,
              lineHeight: 1.2,
            }}>
            Join the{' '}
            <Box
              component='span'
              sx={{
                background: 'linear-gradient(135deg, #ff4444 0%, #4cc9f0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              Community
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              color: 'rgba(255, 255, 255, 0.6)',
              mb: 6,
              maxWidth: '500px',
              mx: 'auto',
            }}>
            Start tracking matches, building teams, and analyzing performance like never before.
          </Typography>

          {/* Stats Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: { xs: 3, md: 4 },
              maxWidth: '600px',
              mx: 'auto',
            }}>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #ff4444 0%, #ff6b6b 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'monospace',
                }}>
                FREE
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  mt: 1,
                }}>
                FOREVER
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #4cc9f0 0%, #76d9f0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'monospace',
                }}>
                1K+
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  mt: 1,
                }}>
                USERS
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #ff4444 0%, #4cc9f0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'monospace',
                }}>
                EASY
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  mt: 1,
                }}>
                SETUP
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
