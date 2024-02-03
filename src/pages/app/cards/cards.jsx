import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';

import { Skeleton } from '@/components/ui/skeleton';

import { getCreditCard } from '@/api/get-credit-cards';

import { Loader2Icon } from 'lucide-react';

export function Cards() {
    const {
        data: result,
        isFetching: isFetchingCards,
        isLoading: isLoadingCards,
    } = useQuery({
        queryKey: ['getCreditCard'],
        queryFn: () => getCreditCard(),
        refetchOnWindowFocus: false,
    });

    return (
        <>
            <Helmet title="Credit Cards" />
            <div className="flex flex-col gap-4">
                <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight">
                    Cartões
                    {isFetchingCards && <Loader2Icon className="h-5 w-5 animate-spin text-muted-foreground" />}
                </h1>
                <div className="gap-2.5 grid md:grid-cols-3">
                    {/* TODO:Add Filter Options */}
                    {isLoadingCards &&
                        !result &&
                        Array.from({ length: 5 }).map((_, i) => {
                            return (
                                <div key={i} className="flex gap-2 flex-col border rounded-md p-3">
                                    <Skeleton className="h-[125px] w-full rounded-xl" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[250px]" />
                                        <Skeleton className="h-4 w-[200px]" />
                                    </div>
                                </div>
                            );
                        })}
                    {result &&
                        result.map((card) => {
                            return (
                                <>
                                    <div key={card.id} className="rounded-md flex-col md:basis-1/3 border p-3">
                                        {card.bank}
                                    </div>
                                </>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
