import { useState } from 'react'
import styles from './SignUp.module.css';
import Input from '@mui/joy/Input';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';




function SignIn() {
    const [formData, setFormData] = useState({
      email: '',
      senha: '',
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Lógica para enviar os dados do formulário para o servidor ou realizar outras ações
    };
  
    return (
      
        <Card variant="solid" color="primary" invertedColors sx={{ maxWidth: 343}} className={styles['signup-container']}>
          <h2 className={styles['signup-title']}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles['input-field']}>
              <label htmlFor="email" className={styles['input-label']}>
                Email:
              </label>
              <Input
                size="sm"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles['input']}
                variant="soft"
              />
            </div>
            <div className={styles['input-field']}>
              <label htmlFor="senha" className={styles['input-label']}>
                Senha:
              </label>
              <Input
                size="sm"
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                className={styles['input']}
                variant="soft"
              />
            </div>
            <div className={styles['button-container']}>
              <Button variant="solid"  sx={{margin: '5px'}} className={styles['button']} type="submit">
                Login
              </Button>
              <Button variant="soft" sx={{margin: '5px'}} className={styles['button']}>Não tenho conta</Button>
            </div>
          </form>
        </Card>
    );
  }
  
  export default SignIn;
