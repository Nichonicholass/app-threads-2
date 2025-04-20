import { useMutation } from '@tanstack/react-query';
import * as React from 'react';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import api from '@/lib/api';

// ==========================
// DELETE TICKET MUTATION
// ==========================
type DeleteMutationType = {
  id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
};

export const useDeleteTicketMutation = ({
  id,
  setOpen,
  refetch,
}: DeleteMutationType) => {
  const { mutateAsync: handleDelete, isPending } = useMutation({
    mutationFn: async () => {
      await api.delete(`/task/${id}`);
    },
    onSuccess: () => {
      toast.success('Ticket berhasil dihapus');
      setOpen(false);
      refetch();
    },
    onError: (error: AxiosError) => {
      toast.error(error.message || 'Gagal menghapus ticket');
    },
  });

  return { handleDelete, isPending };
};

// ==========================
// ADD TICKET MUTATION
// ==========================
export type TicketFormType = {
  title: string;
  description: string;
  dueDate: Date;
  tags: string[];
  status: string;
};

type AddTicketMutationType = {
  refetch: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useAddTicketMutation = ({
  refetch,
  setOpen,
}: AddTicketMutationType) => {
  const { mutateAsync: handleAdd, isPending } = useMutation<void, AxiosError, TicketFormType>({
    mutationFn: async (data) => {
      await api.post('/task', data);
    },
    onSuccess: () => {
      toast.success('Ticket berhasil ditambahkan');
      refetch();
      setOpen(false);
    },
    onError: (error) => {
      toast.error(error.message || 'Gagal menambahkan ticket');
    },
  });

  return { handleAdd, isPending };
};

// ==========================
// EDIT TICKET MUTATION
// ==========================
type EditTicketMutationType = AddTicketMutationType & {
  id: string;
};

export const useEditTicketMutation = ({
  refetch,
  setOpen,
  id,
}: EditTicketMutationType) => {
  const { mutateAsync: handleEdit, isPending } = useMutation<void, AxiosError, TicketFormType>({
    mutationFn: async (data) => {
      await api.put(`/task/${id}`, data);
    },
    onSuccess: () => {
      toast.success('Ticket berhasil diubah');
      refetch();
      setOpen(false);
    },
    onError: (error) => {
      toast.error(error.message || 'Gagal mengubah ticket');
    },
  });

  return { handleEdit, isPending };
};
