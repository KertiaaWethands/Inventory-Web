import * as React from 'react';
import LogoImage from '../../../../img/Logo.svg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ApprovalIcon from '@mui/icons-material/Approval';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import styles from "./style.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.side}>
            <img src={LogoImage} alt='Logo' className={styles.imgLogo}></img>
            <div className={styles.containerKoin}>
                Jumlah Koin <button className={styles.koin}>+</button>
            </div>
            <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding className={styles.listButton}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Daftar Barang" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={styles.listButton}>
            <ListItemButton>
              <ListItemIcon>
                <InventoryIcon/>
              </ListItemIcon>
              <ListItemText primary="Pengembalian Produk" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={styles.listButton}>
            <ListItemButton>
              <ListItemIcon>
                <LocalAtmIcon/>
              </ListItemIcon>
              <ListItemText primary="Transaksi" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={styles.listButton}>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ApprovalIcon/>
              </ListItemIcon>
              <ListItemText primary="Audit" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={styles.listButton}>
            <ListItemButton>
              <ListItemIcon>
                <MenuBookIcon/>
              </ListItemIcon>
              <ListItemText primary="Pesanan" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
        </div>
  );
}