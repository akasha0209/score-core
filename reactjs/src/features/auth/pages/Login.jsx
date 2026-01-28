import { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    // learning purpose: fake login
    console.log('Logging in with', form);

    // fake token
    localStorage.setItem('token', 'dummy-token');

    //redirect to dashboard
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    // learning purpose: fake Google login
    console.log('Logging in with Google');

    // fake token
    localStorage.setItem('token', 'google-dummy-token');

    //redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        overflow: 'hidden',
        position: 'fixed',
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
      {/* Left Side - Login Form */}
      <Box
        sx={{
          width: { xs: '100%', md: '45%' },
          height: '100vh',
          background: '#0a0a0a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: 3, sm: 4, md: 6 },
          position: 'relative',
          overflow: 'hidden',
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
              Welcome back! Please login to your account.
            </Typography>
          </Box>

          {/* Login Form */}
          <Box component='form'>
            <TextField
              name='email'
              label='Email Address'
              type='email'
              value={form.email}
              onChange={handleChange}
              fullWidth
              margin='normal'
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
              }}
            />

            <TextField
              name='password'
              label='Password'
              type='password'
              value={form.password}
              onChange={handleChange}
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
              }}
            />

            <Button
              variant='contained'
              fullWidth
              onClick={handleLogin}
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
              Login
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
              onClick={handleGoogleLogin}
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
              Don't have an account?{' '}
              <Box
                component='span'
                onClick={() => navigate('/register')}
                sx={{
                  color: '#ff4444',
                  fontWeight: 700,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}>
                Create Account
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Side - Hero Section */}
      <Box
        sx={{
          width: { xs: '100%', md: '55%' },
          height: '100vh',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: 4, md: 6 },
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
            Track Every{' '}
            <Box
              component='span'
              sx={{
                background: 'linear-gradient(135deg, #ff4444 0%, #4cc9f0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              Moment
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
            Real-time cricket scoring made simple. Track runs, wickets, and
            everything in between.
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
                200+
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  mt: 1,
                }}>
                MATCHES
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
                24/7
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  mt: 1,
                }}>
                LIVE
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
