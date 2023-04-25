export interface Project {
  dta_user_since: string | null;
  id: number;
  inv_is_gen_secret_word: boolean;
  inv_sample_text: string;
  inv_secret_word: string;
  inv_tasks_visibility: number;
  inv_welcome_message: string;
  is_active: number;
  is_owner_watcher: boolean;
  logo_url: string;
  name: string;
  position: number;
  spent_sec_all_time: number;
  tasks_visibility: number;
  uid: string;
  users: unknown[];
}
