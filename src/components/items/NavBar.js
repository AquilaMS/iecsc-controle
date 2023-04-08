import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddUserScreen from '../screens/AddUserScreen';
import { useState } from 'react';

const drawerWidth = 240;

export default function ClippedDrawer() {
    
    let [pageIndex, setPageIndex] = useState(0)
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        IECSC
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem key={'Teste'} disablePadding>
                            <ListItemButton onClick={()=>setPageIndex(0)}>
                                <ListItemIcon>
                                    <PersonAddAltIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Adicionar Usuário'} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'Teste'} disablePadding>
                            <ListItemButton onClick={()=>{setPageIndex(1); console.log(pageIndex)}}>
                                <ListItemIcon>
                                    <PointOfSaleIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Entradas'} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'Teste'} disablePadding>
                            <ListItemButton onClick={()=>setPageIndex(2)}>
                                <ListItemIcon>
                                    <AddShoppingCartIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Movimentações'} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
                <Toolbar />
                {pageIndex === 0 ? <AddUserScreen /> : <p>aaa</p>} 
                
            </Box>
        </Box>
    );
}