export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      gallery_images: {
        Row: {
          caption: string | null
          created_at: string
          id: string
          image_url: string
          sort_order: number
        }
        Insert: {
          caption?: string | null
          created_at?: string
          id?: string
          image_url: string
          sort_order?: number
        }
        Update: {
          caption?: string | null
          created_at?: string
          id?: string
          image_url?: string
          sort_order?: number
        }
        Relationships: []
      }
      rsvps: {
        Row: {
          attending: boolean
          created_at: string
          guest_count: number
          id: string
          message: string | null
          name: string
        }
        Insert: {
          attending?: boolean
          created_at?: string
          guest_count?: number
          id?: string
          message?: string | null
          name: string
        }
        Update: {
          attending?: boolean
          created_at?: string
          guest_count?: number
          id?: string
          message?: string | null
          name?: string
        }
        Relationships: []
      }
      site_content: {
        Row: {
          data: Json
          id: number
          updated_at: string
        }
        Insert: {
          data: Json
          id?: number
          updated_at?: string
        }
        Update: {
          data?: Json
          id?: number
          updated_at?: string
        }
        Relationships: []
      }
      timeline_events: {
        Row: {
          created_at: string
          description: string | null
          id: string
          sort_order: number
          time_label: string
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          sort_order?: number
          time_label: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          sort_order?: number
          time_label?: string
          title?: string
        }
        Relationships: []
      }
    }
    Views: {}
    Functions: {
      claim_admin: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {}
    CompositeTypes: {}
  }
}
