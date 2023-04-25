interface APIProject {
  name?: string;
  file?: File;
  position?: number;
  is_active?: boolean;
  id_users_add?: number[];
  id_users_del?: number[];
  is_owner_watcher?: boolean;
  dta_user_since?: string;
}
