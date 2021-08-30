import Profile from "@/models/profile";
import { createStore } from "vuex";

export class ProfileState {
  public profile: Profile|null = null
}